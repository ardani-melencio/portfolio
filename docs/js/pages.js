const PAGES = {
    index: `
        <div id="welcome-panel">
            <h1>welcome!</h1>
            <h3>Introduction:</h3>
            <p>This e-portfolio presents my Midterm Project in Object-Oriented Programming using Github Pages.</p>
            <p>It includes quizzes, activities, and exams that demonstrate my understanding of OOP concepts.</p>
        </div>
        <div id="navigation">
            <a href="#" class="button" data-page="midterms">midterms</a>
            <a href="#" class="button" data-page="finals">finals</a>
        </div>
    `,
    midterms: `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Midterms</h1>
                <h3>Select a Category</h3>
            </div>
        </div>
        <div id="navigation">
            <a href="#" class="button" data-page="midterms-quizzes">Quizzes</a>
            <a href="#" class="button" data-page="midterms-seatworks">Seatworks</a>
            <a href="#" class="button" data-page="midterms-activities">Activities</a>
            <a href="#" class="button" data-page="midterms-exam">Exam</a>
        </div>
    `,
    finals: `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Finals</h1>
                <h3>Select a Category</h3>
            </div>
        </div>
        <div id="navigation">
            <a href="#" class="button" data-page="finals-quizzes">Quizzes</a>
            <a href="#" class="button" data-page="finals-seatworks">Seatworks</a>
            <a href="#" class="button" data-page="finals-activities">Activities</a>
            <a href="#" class="button" data-page="finals-exam">Exam</a>
        </div>
    `,
    'midterms-quizzes': `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Midterm Quizzes</h1>
                <h3>Quizzes</h3>
                <p>Add your quiz content here...</p>
            </div>
            <div id="welcome-panel">
                <a href="#" class="button" data-page="midterms">Back</a>
            </div>
        </div>
    `,
    'midterms-seatworks': `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Midterm Seatworks</h1>
                <h3>Seatworks</h3>
                <p>Add your seatwork content here...</p>
            </div>
            <div id="welcome-panel">
                <a href="#" class="button" data-page="midterms">Back</a>
            </div>
        </div>
    `,
    'midterms-activities': `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Midterm Activities</h1>
                <h3>Activities</h3>
                <p>Add your activity content here...</p>
            </div>
            <div id="welcome-panel">
                <a href="#" class="button" data-page="midterms">Back</a>
            </div>
        </div>
    `,
    'midterms-exam': `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Midterm Exam</h1>
                <h3>Exam</h3>
                <p>Add your exam content here...</p>
            </div>
            <div id="welcome-panel">
                <a href="#" class="button" data-page="midterms">Back</a>
            </div>
        </div>
    `,
    'finals-quizzes': `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Finals Quizzes</h1>
                <h3>Quizzes</h3>
                <p>Add your quiz content here...</p>
            </div>
            <div id="welcome-panel">
                <a href="#" class="button" data-page="finals">Back</a>
            </div>
        </div>
    `,
    'finals-seatworks': `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Finals Seatworks</h1>
                <h3>Seatworks</h3>
                <p>Add your seatwork content here...</p>
            </div>
            <div id="welcome-panel">
                <a href="#" class="button" data-page="finals">Back</a>
            </div>
        </div>
    `,
    'finals-activities': `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Finals Activities</h1>
                <h3>Activities</h3>
                <p>Add your activity content here...</p>
            </div>
            <div id="welcome-panel">
                <a href="#" class="button" data-page="finals">Back</a>
            </div>
        </div>
    `,
    'finals-exam': `
        <div id="left-panel">
            <div id="welcome-panel">
                <h1>Finals Exam</h1>
                <h3>Exam</h3>
                <p>Add your exam content here...</p>
            </div>
            <div id="welcome-panel">
                <a href="#" class="button" data-page="finals">Back</a>
            </div>
        </div>
    `,
    contact: `
        <div id="welcome-panel">
            <h1>Contact</h1>
            <h3>Get in Touch</h3>
            <p>Author: Ardani Jandel Melencio</p>
            <p>Email: ardanimelencio@gmail.com</p>
            <p>Contact: 09393452249</p>
        </div>
    `
};
