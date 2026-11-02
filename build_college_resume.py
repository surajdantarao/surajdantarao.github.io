import os
import zipfile
import io
import shutil
import urllib.parse
from PIL import Image
import docx
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
import copy

TEMPLATE_PATH = r"C:\Users\suraj\.gemini\antigravity\brain\5de19afe-d938-4733-8e07-309ffc6e6c5c\.user_uploaded\media_1793538243343_931fcabd.docx"
PHOTO_PATH = r"C:\Users\suraj\Documents\portfolio\public\passport photo.jpeg"
OUTPUT_DIR = r"C:\Users\suraj\Documents\portfolio"
DOCX_OUTPUT = os.path.join(OUTPUT_DIR, "Suraj_Dantarao_College_Resume.docx")
PDF_OUTPUT = os.path.join(OUTPUT_DIR, "Suraj_Dantarao_College_Resume.pdf")

def prepare_cropped_photo(src_path):
    im = Image.open(src_path)
    w, h = im.size
    crop_size = min(w, h)
    top = int((h - crop_size) * 0.25)
    bottom = top + crop_size
    cropped = im.crop((0, top, crop_size, bottom))
    buf = io.BytesIO()
    cropped.save(buf, format="JPEG", quality=95)
    return buf.getvalue()

def add_hyperlink(paragraph, url, text, color="0563C1", underline=True, bold=False, italic=False, font_name="Calibri", font_size=120650):
    part = paragraph.part
    r_id = part.relate_to(url, docx.opc.constants.RELATIONSHIP_TYPE.HYPERLINK, is_external=True)

    hyperlink = OxmlElement('w:hyperlink')
    hyperlink.set(qn('r:id'), r_id)

    new_run = OxmlElement('w:r')
    rPr = OxmlElement('w:rPr')

    if font_name:
        rFonts = OxmlElement('w:rFonts')
        rFonts.set(qn('w:ascii'), font_name)
        rFonts.set(qn('w:hAnsi'), font_name)
        rFonts.set(qn('w:cs'), font_name)
        rPr.append(rFonts)

    if font_size:
        hp = str(int(round((font_size / 12700.0) * 2)))
        sz = OxmlElement('w:sz')
        sz.set(qn('w:val'), hp)
        rPr.append(sz)
        szCs = OxmlElement('w:szCs')
        szCs.set(qn('w:val'), hp)
        rPr.append(szCs)

    if color:
        c = OxmlElement('w:color')
        c.set(qn('w:val'), color)
        rPr.append(c)

    if underline:
        u = OxmlElement('w:u')
        u.set(qn('w:val'), 'single')
        rPr.append(u)

    if bold:
        b = OxmlElement('w:b')
        rPr.append(b)

    if italic:
        i = OxmlElement('w:i')
        rPr.append(i)

    new_run.append(rPr)
    t = OxmlElement('w:t')
    t.text = text
    new_run.append(t)
    hyperlink.append(new_run)

    paragraph._element.append(hyperlink)
    return hyperlink

def build_resume():
    doc = docx.Document(TEMPLATE_PATH)
    
    # 1. Update Table 0 (Header)
    t0 = doc.tables[0]
    c1 = t0.rows[0].cells[1]
    p_name = c1.paragraphs[0]
    p_name.text = ""
    r_name = p_name.add_run("SURAJ DANTARAO")
    r_name.bold = True
    r_name.font.name = "Calibri"
    r_name.font.size = 228600  # 18pt
    p_name.alignment = docx.enum.text.WD_ALIGN_PARAGRAPH.CENTER
    
    p_deg = c1.paragraphs[1]
    p_deg.text = ""
    r_deg = p_deg.add_run("B.Tech in Computer Technology")
    r_deg.bold = False
    r_deg.font.name = "Calibri"
    r_deg.font.size = 152400  # 12pt
    p_deg.alignment = docx.enum.text.WD_ALIGN_PARAGRAPH.CENTER
    
    # 2. Update Table 1 (Contact bar with Portfolio link & all clickable hyperlinks)
    t1 = doc.tables[1]
    p_contact = t1.rows[0].cells[0].paragraphs[0]
    p_contact.text = ""
    p_contact.alignment = docx.enum.text.WD_ALIGN_PARAGRAPH.CENTER

    # Location
    r = p_contact.add_run("Pune, Maharashtra, India")
    r.font.name = "Calibri"
    r.font.size = 114300  # 9pt
    
    # Separator helper
    def add_sep():
        s = p_contact.add_run("  |  ")
        s.font.name = "Calibri"
        s.font.size = 114300
        return s

    add_sep()
    # Phone (clickable)
    add_hyperlink(p_contact, "tel:+918767753086", "+91 8767753086", color="0563C1", underline=True, font_size=114300)
    
    add_sep()
    # Email (clickable)
    add_hyperlink(p_contact, "mailto:surajdantrao0777@gmail.com", "surajdantrao0777@gmail.com", color="0563C1", underline=True, font_size=114300)

    add_sep()
    # Portfolio Link (clickable)
    add_hyperlink(p_contact, "https://surajdantarao.github.io", "Portfolio", color="0563C1", underline=True, font_size=114300)

    add_sep()
    # LinkedIn Profile (clickable)
    add_hyperlink(p_contact, "https://linkedin.com/in/suraj-dantarao-b1b28b374", "LinkedIn", color="0563C1", underline=True, font_size=114300)

    add_sep()
    # GitHub Profile (clickable)
    add_hyperlink(p_contact, "https://github.com/surajdantarao", "GitHub", color="0563C1", underline=True, font_size=114300)

    # Reference elements from template
    ref_header = doc.paragraphs[2]._element
    ref_body = doc.paragraphs[3]._element
    ref_edu_org = doc.paragraphs[5]._element
    ref_edu_deg = doc.paragraphs[6]._element
    ref_exp_org = doc.paragraphs[12]._element
    ref_exp_role = doc.paragraphs[13]._element
    ref_bullet = doc.paragraphs[14]._element
    ref_proj_title = doc.paragraphs[22]._element
    ref_proj_tech = doc.paragraphs[23]._element
    ref_skill = doc.paragraphs[33]._element
    
    body_elem = doc._body._element
    paragraphs_to_remove = [p._element for p in doc.paragraphs[2:]]
    for p_elem in paragraphs_to_remove:
        body_elem.remove(p_elem)
        
    def add_section_header(title):
        elem = copy.deepcopy(ref_header)
        for r in elem.xpath('.//w:r'):
            elem.remove(r)
        body_elem.append(elem)
        p = doc.paragraphs[-1]
        r = p.add_run(title)
        r.bold = True
        r.font.name = "Calibri"
        
    def add_bullet(text):
        elem = copy.deepcopy(ref_bullet)
        for r in elem.xpath('.//w:r'):
            elem.remove(r)
        body_elem.append(elem)
        p = doc.paragraphs[-1]
        r = p.add_run(text)
        r.font.name = "Calibri"
        r.font.size = 120650
        return p

    def add_bullet_point_lead(bold_lead, body_text):
        elem = copy.deepcopy(ref_bullet)
        for r in elem.xpath('.//w:r'):
            elem.remove(r)
        body_elem.append(elem)
        p = doc.paragraphs[-1]
        r1 = p.add_run(bold_lead)
        r1.bold = True
        r1.font.name = "Calibri"
        r1.font.size = 120650
        r2 = p.add_run(body_text)
        r2.font.name = "Calibri"
        r2.font.size = 120650
        return p

    def add_bullet_point_with_link(bold_lead, body_text, link_text, link_url):
        elem = copy.deepcopy(ref_bullet)
        for r in elem.xpath('.//w:r'):
            elem.remove(r)
        body_elem.append(elem)
        p = doc.paragraphs[-1]
        r1 = p.add_run(bold_lead)
        r1.bold = True
        r1.font.name = "Calibri"
        r1.font.size = 120650
        r2 = p.add_run(body_text + " — [")
        r2.font.name = "Calibri"
        r2.font.size = 120650
        add_hyperlink(p, link_url, link_text, color="0563C1", underline=True, font_size=120650)
        r3 = p.add_run("]")
        r3.font.name = "Calibri"
        r3.font.size = 120650
        return p
        
    def add_edu_entry(org, loc, deg, date_grade):
        e1 = copy.deepcopy(ref_edu_org)
        for r in e1.xpath('.//w:r'):
            e1.remove(r)
        body_elem.append(e1)
        p1 = doc.paragraphs[-1]
        r1a = p1.add_run(org)
        r1a.bold = True
        r1a.font.name = "Calibri"
        r1a.font.size = 120650
        r1tab = p1.add_run("\t")
        r1tab.font.name = "Calibri"
        r1b = p1.add_run(loc)
        r1b.bold = True
        r1b.font.name = "Calibri"
        r1b.font.size = 120650
        
        e2 = copy.deepcopy(ref_edu_deg)
        for r in e2.xpath('.//w:r'):
            e2.remove(r)
        body_elem.append(e2)
        p2 = doc.paragraphs[-1]
        r2a = p2.add_run(deg)
        r2a.font.name = "Calibri"
        r2a.font.size = 120650
        r2tab = p2.add_run("\t")
        r2tab.font.name = "Calibri"
        r2b = p2.add_run(date_grade)
        r2b.bold = True
        r2b.font.name = "Calibri"
        r2b.font.size = 120650

    def add_exp_entry(org, loc, role, date, bullets):
        e1 = copy.deepcopy(ref_exp_org)
        for r in e1.xpath('.//w:r'):
            e1.remove(r)
        body_elem.append(e1)
        p1 = doc.paragraphs[-1]
        r1a = p1.add_run(org)
        r1a.bold = True
        r1a.font.name = "Calibri"
        r1a.font.size = 120650
        r1tab = p1.add_run("\t")
        r1tab.font.name = "Calibri"
        r1b = p1.add_run(loc)
        r1b.bold = True
        r1b.font.name = "Calibri"
        r1b.font.size = 120650

        e2 = copy.deepcopy(ref_exp_role)
        for r in e2.xpath('.//w:r'):
            e2.remove(r)
        body_elem.append(e2)
        p2 = doc.paragraphs[-1]
        r2a = p2.add_run(f"Job Role: {role}")
        r2a.italic = True
        r2a.font.name = "Calibri"
        r2a.font.size = 120650
        r2tab = p2.add_run("\t")
        r2tab.font.name = "Calibri"
        r2b = p2.add_run(date)
        r2b.italic = True
        r2b.font.name = "Calibri"
        r2b.font.size = 120650

        for b in bullets:
            add_bullet(b)

    def add_project_entry(name_role, github_url, demo_url, tech, bullets):
        e1 = copy.deepcopy(ref_proj_title)
        for r in e1.xpath('.//w:r'):
            e1.remove(r)
        body_elem.append(e1)
        p1 = doc.paragraphs[-1]
        r1a = p1.add_run(name_role)
        r1a.bold = True
        r1a.font.name = "Calibri"
        r1a.font.size = 120650
        r1tab = p1.add_run("\t")
        r1tab.font.name = "Calibri"
        
        # Clickable links
        if github_url and demo_url:
            add_hyperlink(p1, github_url, "GitHub Link", color="0563C1", underline=True, font_size=120650)
            r_pipe = p1.add_run("  |  ")
            r_pipe.font.name = "Calibri"
            r_pipe.font.size = 120650
            add_hyperlink(p1, demo_url, "Live Demo Link", color="0563C1", underline=True, font_size=120650)
        elif github_url:
            add_hyperlink(p1, github_url, "GitHub Link", color="0563C1", underline=True, font_size=120650)
        elif demo_url:
            add_hyperlink(p1, demo_url, "Live Demo Link", color="0563C1", underline=True, font_size=120650)

        e2 = copy.deepcopy(ref_proj_tech)
        for r in e2.xpath('.//w:r'):
            e2.remove(r)
        body_elem.append(e2)
        p2 = doc.paragraphs[-1]
        r2lbl = p2.add_run("Technology Stack: ")
        r2lbl.bold = True
        r2lbl.font.name = "Calibri"
        r2lbl.font.size = 120650
        r2val = p2.add_run(tech)
        r2val.font.name = "Calibri"
        r2val.font.size = 120650

        for b in bullets:
            add_bullet(b)

    def add_skill_line(category, items):
        e = copy.deepcopy(ref_skill)
        for r in e.xpath('.//w:r'):
            e.remove(r)
        body_elem.append(e)
        p = doc.paragraphs[-1]
        r1 = p.add_run(category + ": ")
        r1.bold = True
        r1.font.name = "Calibri"
        r1.font.size = 120650
        r2 = p.add_run(items)
        r2.font.name = "Calibri"
        r2.font.size = 120650

    # --- SECTION 1: CAREER OBJECTIVE ---
    add_section_header("CAREER OBJECTIVE")
    elem_obj = copy.deepcopy(ref_body)
    for r in elem_obj.xpath('.//w:r'):
        elem_obj.remove(r)
    body_elem.append(elem_obj)
    p_obj = doc.paragraphs[-1]
    r_obj = p_obj.add_run(
        "Full Stack & AI/ML Developer pursuing B.Tech in Computer Technology at RTMSSU with hands-on expertise building production web applications, multi-tenant institutional audit platforms, and local LLM agent workflows. Proficient across Python, JavaScript, TypeScript, React 19, NestJS, FastAPI, Prisma, MySQL, and Model Context Protocol (MCP) architectures. Seeking to leverage technical skills in machine learning, full-stack engineering, and workflow automation to build scalable software solutions that drive operational efficiency."
    )
    r_obj.font.name = "Calibri"
    r_obj.font.size = 120650

    # --- SECTION 2: EDUCATION ---
    add_section_header("EDUCATION")
    add_edu_entry(
        "Ratan Tata Maharashtra State Skills University (RTMSSU)",
        "Pune, Maharashtra",
        "B.Tech in Computer Technology",
        "2024 - 2027 (Pursuing)  |  CGPA - 5.9"
    )
    add_edu_entry(
        "Zeal Polytechnic College",
        "Pune, Maharashtra",
        "MSBTE (Diploma in Computer Engineering)",
        "2020 - 2023  |  Percentage - 72.97%"
    )
    add_edu_entry(
        "Gagangiri School",
        "Pune, Maharashtra",
        "SSC (Secondary School Certificate)",
        "2019 - 2020  |  Percentage - 75.00%"
    )

    # --- SECTION 3: WORK EXPERIENCE/INTERNSHIP ---
    add_section_header("WORK EXPERIENCE/INTERNSHIP")
    add_exp_entry(
        "Whitecode Technologies / Whitecode AI",
        "Pune, Maharashtra",
        "Software Engineering Intern",
        "July 2026 – Present",
        [
            "Built ClustorAudit, a full-stack institutional accreditation & audit platform (React 19, NestJS, Prisma, MySQL/MariaDB) for IQAC Cluster across 4 roles (Admin, Auditor, Institute, Coordinator), cutting audit turnaround by 60%.",
            "Automated scoring rubrics, evidence validation, and dynamic PDF reports, reaching 98%+ compliance accuracy and optimizing REST APIs to reduce query latencies by 45%.",
            "Architected an AI Mail Agent using FastAPI, React.js, and Ollama local LLMs for offline email triage, summarization, and Google API integrations, reducing manual processing by 65%."
        ]
    )
    add_exp_entry(
        "Esbee Company",
        "Pune, Maharashtra",
        "Quality Line Operator",
        "July 2023 – April 2024",
        [
            "Conducted precision quality inspections and recorded defect data across assembly lines to maintain product compliance and zero defect spillover.",
            "Identified recurring quality issues and reported actionable process improvements to optimize delivery."
        ]
    )
    add_exp_entry(
        "Delta Fire Company",
        "Pune, Maharashtra",
        "Maintenance Technician",
        "January 2022 – June 2022",
        [
            "Maintained service logs and diagnostic checklists for industrial fire safety systems, achieving zero unplanned operational downtime."
        ]
    )

    # --- SECTION 4: PROJECTS (All 7 technical projects from portfolio, excluding GarbaSaathi) ---
    add_section_header("PROJECTS")
    
    # 1. MahaSeva AI
    add_project_entry(
        "MahaSeva AI — Lead Developer",
        "https://github.com/surajdantarao/MahaSeva-AI.git",
        "https://maha-seva-ai.vercel.app/",
        "Python | FastAPI | React.js | Ollama | Vector Search | NLP",
        [
            "Developed an AI-driven citizen welfare scheme discovery platform with multilingual semantic search and verified Maharashtra government links.",
            "Implemented semantic vector matching with local LLMs to accurately match citizen demographics with relevant government welfare schemes.",
            "Delivered sub-second recommendation responses with verified direct application links for Maharashtra citizens."
        ]
    )

    # 2. MK27 Gym Management System
    add_project_entry(
        "MK27 Gym Management System — Full Stack Developer",
        "https://github.com/surajdantarao/MK27-GYM",
        "https://mk-27-gym.vercel.app/",
        "MongoDB | Express.js | React.js | Node.js | JWT | bcrypt",
        [
            "Built a full-stack MERN web application for managing gym member lifecycle, plan subscriptions, billing ledgers, and membership status tracking.",
            "Implemented secure user authentication and authorization using JWT and bcrypt, enforcing role-based access control across admin and member portals.",
            "Designed RESTful API endpoints and optimized MongoDB aggregation pipelines, cutting financial record query response time by 40%."
        ]
    )

    # 3. AI Mail Agent
    add_project_entry(
        "AI Mail Agent — AI Developer",
        "https://github.com/surajdantarao/AI-Mail-agent",
        None,
        "Python | FastAPI | React.js | Ollama | Local LLMs | Google Workspace APIs",
        [
            "Engineered an offline-capable email triage assistant parsing email streams, auto-summarizing messages, and generating contextual draft replies.",
            "Integrated Google Workspace APIs (Gmail, Sheets, Drive) with local Ollama models ensuring zero data leakage and 100% private data processing.",
            "Streamlined inbound inbox processing, decreasing routine email management time by 65%."
        ]
    )

    # 4. Guest Lecture & Visitor Management System
    add_project_entry(
        "Guest Lecture & Visitor Management System — Full Stack Developer",
        "https://github.com/surajdantarao/guest-leacture",
        "https://guest-leacture.vercel.app/",
        "React.js | Node.js | Express.js | MySQL | Bootstrap",
        [
            "Created a digital academic portal for logging campus visitor entries, scheduling guest lectures, managing speaker profiles, and archiving feedback.",
            "Implemented role-based administrative dashboards with automated record management and query latency reduction."
        ]
    )

    # 5. Spam Detection System
    add_project_entry(
        "Spam Detection System — ML Engineer",
        "https://github.com/surajdantarao/spam-detection-.git",
        None,
        "Python | Flask | Scikit-learn | NLP | TF-IDF | Naive Bayes",
        [
            "Developed an ML classification web app to classify SMS and messages as spam/ham using Multinomial Naive Bayes and TF-IDF vectorization.",
            "Achieved ~97% classification accuracy with structured text preprocessing pipelines, tokenization, and stop-word filtering."
        ]
    )

    # 6. Task Sheet Automation
    add_project_entry(
        "Task Sheet Automation — Backend Developer",
        "https://github.com/surajdantarao/task-sheet-automation.git",
        None,
        "Python | FastAPI | Google Sheets API | Webhooks | Task Queues",
        [
            "Architected an automated two-way workflow synchronization engine between internal database records and Google Sheets via webhooks.",
            "Eliminated manual spreadsheet data entry with scheduled background queues and automated webhook event handlers."
        ]
    )

    # 7. QR-Based Hyperlocal Store Platform
    add_project_entry(
        "QR-Based Hyperlocal Store Platform — Full Stack Developer",
        "https://github.com/surajdantarao/qr-store",
        "https://qr-store.onrender.com/",
        "Python | Flask | SQLite | React | SQLAlchemy",
        [
            "Developed a QR-driven digital storefront for local shopkeepers featuring live product catalogs, merchant dashboards, and order tracking.",
            "Implemented seller dashboard with real-time order status updates and fast mobile browsing for customers."
        ]
    )

    # --- SECTION 5: SKILLS ---
    add_section_header("SKILLS")
    add_skill_line("Programming Languages", "Python, JavaScript, TypeScript, Java, SQL, HTML5, CSS3")
    add_skill_line("Frameworks and Libraries", "React 19, React.js, NestJS, FastAPI, Express.js, Node.js, Flask, Tailwind CSS, Bootstrap, Prisma ORM")
    add_skill_line("Databases", "MySQL, MariaDB, PostgreSQL, MongoDB, SQLite, SQLAlchemy")
    add_skill_line("DevOps Framework", "Docker, Git, GitHub Actions, CI/CD Basics, Postman, Webhooks")
    add_skill_line("Tools & Platform", "VS Code, Linux, Ollama, Model Context Protocol (MCP), Vite, Google Cloud APIs")
    add_skill_line("Cloud Framework", "Google Cloud Platform (Gmail API, Sheets API, Drive API), Vercel, Render")
    add_skill_line("Soft Skills", "Problem Solving, Team Collaboration, Technical Documentation, Critical Thinking, Adaptability")
    add_skill_line("Spoken Languages", "English, Hindi, Marathi")

    # --- SECTION 6: CERTIFICATIONS (Point-wise with clickable links to verified certificates) ---
    add_section_header("CERTIFICATIONS")
    add_bullet_point_with_link(
        "Claude 101: Foundation Certification",
        " — LLM & Generative AI via Anthropic (Sep 2026). Credential ID: ANTH-CLAUDE101",
        "View Certificate",
        "https://surajdantarao.github.io/certificates/Antropic%20Claude%20101%20.pdf"
    )
    add_bullet_point_with_link(
        "Model Context Protocol (MCP)",
        " — AI Agent Architecture via Anthropic (Sep 2026). Credential ID: ANTH-MCP-2026",
        "View Certificate",
        "https://surajdantarao.github.io/certificates/Antropic%20MCP.pdf"
    )
    add_bullet_point_with_link(
        "IT Specialist: Artificial Intelligence",
        " — Artificial Intelligence via Certiport / Pearson VUE (Jul 2025). Credential ID: CERTI-AI-2025",
        "View Certificate",
        "https://surajdantarao.github.io/certificates/Artificial%20Intelliagence%20Certiport.pdf"
    )
    add_bullet_point_with_link(
        "Code; Without Barriers",
        " — Ethical AI Practice & Cloud via Microsoft (Jul 2025). Credential ID: MSFT-CWB-2025",
        "View Certificate",
        "https://surajdantarao.github.io/certificates/Code%20without%20barriour%20microsoft.pdf"
    )
    add_bullet_point_with_link(
        "Google AI Fundamentals",
        " — Artificial Intelligence via Google Career Certificates (Aug 2026). Credential ID: GOOG-AI-2026",
        "View Certificate",
        "https://surajdantarao.github.io/certificates/AI-Fundamntals%20Google%20.jpeg"
    )
    add_bullet_point_with_link(
        "Deep Learning with Certification",
        " — Deep Learning via Deep Learning Specialization (Nov 2025). Credential ID: DL-SPEC-2025",
        "View Certificate",
        "https://surajdantarao.github.io/certificates/Deep%20Learning%20with%20Certification.pdf"
    )

    # --- SECTION 7: EXTRA CURRICULAR ACTIVITIES (Point-wise) ---
    add_section_header("EXTRA CURRICULAR ACTIVITIES")
    add_bullet_point_lead(
        "Open-Source Contributor: ",
        "Developed and maintained open-source developer tooling, AI mail agents, and web applications. (2025 - 2026)"
    )
    add_bullet_point_lead(
        "Technical Workshops & Ideation: ",
        "Participated in university and state-level technical ideation events, hackathons, and AI seminars. (2024 - 2026)"
    )

    # --- SECTION 8: ACHIEVEMENTS (Point-wise with clickable certificate link) ---
    add_section_header("ACHIEVEMENTS")
    add_bullet_point_with_link(
        "National Innovation Showcase (Ideation & Innovation Program): ",
        "Recognized for AI project presentation and technical innovation. (2026)",
        "View Certificate",
        "https://surajdantarao.github.io/certificates/Suraj_Dantarao%20Ideation.pdf"
    )
    add_bullet_point_lead(
        "IQAC Cluster ClustorAudit Deployment: ",
        "Engineered multi-tenant institutional accreditation and audit system adopted by educational institutions. (2026)"
    )

    temp_docx = os.path.join(OUTPUT_DIR, "temp_resume.docx")
    doc.save(temp_docx)

    photo_data = prepare_cropped_photo(PHOTO_PATH)

    with zipfile.ZipFile(temp_docx, 'r') as zin:
        with zipfile.ZipFile(DOCX_OUTPUT, 'w', compression=zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                if item.filename == "word/media/image2.jpg":
                    zout.writestr(item, photo_data)
                else:
                    zout.writestr(item, zin.read(item.filename))

    if os.path.exists(temp_docx):
        os.remove(temp_docx)

    print(f"Generated DOCX: {DOCX_OUTPUT}")

    public_docx = os.path.join(OUTPUT_DIR, "public", "Suraj_Dantarao_College_Resume.docx")
    shutil.copy2(DOCX_OUTPUT, public_docx)
    print(f"Copied to {public_docx}")

    # Convert to PDF via MS Word COM
    import win32com.client
    import pythoncom
    pythoncom.CoInitialize()
    word = win32com.client.DispatchEx("Word.Application")
    word.Visible = False
    doc_word = word.Documents.Open(os.path.abspath(DOCX_OUTPUT))
    doc_word.ExportAsFixedFormat(
        os.path.abspath(PDF_OUTPUT),
        17,
        OpenAfterExport=False,
        OptimizeFor=0,
        CreateBookmarks=1,
        DocStructureTags=True
    )
    doc_word.Close(False)
    word.Quit()
    pythoncom.CoUninitialize()
    print(f"Generated PDF: {PDF_OUTPUT}")

    public_pdf = os.path.join(OUTPUT_DIR, "public", "Suraj_Dantarao_College_Resume.pdf")
    shutil.copy2(PDF_OUTPUT, public_pdf)
    print(f"Copied to {public_pdf}")

if __name__ == "__main__":
    build_resume()
