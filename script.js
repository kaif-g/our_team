// Function to show sections based on button click
function showSection(section) {
    var teamContainer = document.getElementById('team-container');
    teamContainer.innerHTML = ''; // Clear previous content

    if (section === 'head') {
        // Add Head members (example)
        var categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'CHIEF PATRON';
        teamContainer.appendChild(categoryTitle);
        addMember('chairman ', 'Sri.C.Gangi Reddy', 'Founder & Secretary<br> AITS','./image/chairman.jpg', {

        });
        var categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'PATRON';
        teamContainer.appendChild(categoryTitle);
        addMember('principal', 'Dr.C.Nadhamuni Reddy', ' Principal <br> AITS, TIRUPATI ', './image/principal.jpg', {
            
        });
        
        var categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'Head of Department';
        teamContainer.appendChild(categoryTitle);
        addMember('hod', 'Dr.N.Pushpalatha', 'HOD-ECE <br> AITS, TIRUPATI', './image/hod.jpg', {
          
        });
        


        // Add more head members as needed

    } else if (section === 'core') {
        // Category 1: Event Coordinators
        var categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'Event Coordinator';
        teamContainer.appendChild(categoryTitle);

        addMember('akash', 'B.GURU GANGADHAR RY', 'Dept: ECE<br>', './image/guru.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });

        // Category 2: Event Managers
        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'Event Managers';
        teamContainer.appendChild(categoryTitle);

        addMember('jaganmohan', 'K.JAGAN MOHAN', 'Dept: ECE<br>Manager: TECHNICAL EVENTS ', './image/jagan.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('harshitha', 'C.HARSHITHA', 'Dept: ECE<br>Manager: NON TECHNICAL EVENTS', './image/harshitha.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('eswar', 'K.ESWAR', 'Dept: ECE<br>Manager: ROBOTIC EVENTS', './image/eswar.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });

        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'PROMOTION TEAM';
        teamContainer.appendChild(categoryTitle);

        addMember('krishna vamsi', 'K.KRISHNA VAMSI', 'Dept: ECE<br>TEAM: PROMOTION', './image/vamsi.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('bN.BHARATH CHAND', 'N.BHARATH CHAND', 'Dept: ECE<br>TEAM: PROMOTION', './image/bhaarath chand.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        

        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'Registration & Data Handling Team';
        teamContainer.appendChild(categoryTitle);

        addMember('leeadhar', 'G.LEELADHAR', 'Dept: ECE<br>Team: REGISTRATION', './image/leeladhar.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('bhaskar', 'P.BHASKAR RAMESH SAI', 'Dept: ECE<br>Team: REGISTRATION', './image/bhaskar.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
        addMember('D.M.KAIF', 'D.M.KAIF', 'Dept: ECE<br>Team: DATA HANDLING', './image/kaif.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
        

        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'Logistics and Operation Manager';
        teamContainer.appendChild(categoryTitle);

        addMember('ASHWANI', 'ASHWANI', 'Dept: ECE<br>Manager: LOGISTICS AND OPERATION', './image/ashwini.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('chandini', 'P.CHANDINI', 'Dept: ECE<br>Manager: LOGISTICS AND OPERATION', './image/chandini.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        

       
        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'Hospilatily Team';
        teamContainer.appendChild(categoryTitle);

        addMember('poojitha', 'B.POOJITHA', 'Dept: ECE<br>Team: HOSPILATILY', './image/poojitha.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('C.BHAVANA', 'C.BHAVANA', 'Dept: ECE<br>Team:HOSPILATILY ', './image/bhavana.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
       
        
        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'DESIGN TEAM';
        teamContainer.appendChild(categoryTitle);

        addMember('susmitha', 'P.GIRI', 'Dept: ECE<br>TEAM: DESIGN', './image/giri.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('dinesh', 'M.AKASH', 'Dept: ECE<br>TEAM: DESIGN', './image/akash.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        

        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'TEAM DECORATION';
        teamContainer.appendChild(categoryTitle);

        addMember('susmitha', 'S.SUSMITHA', 'Dept: ECE<br>TEAM: DECORATION', './image/susmitha.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
       
        addMember('E.NISHITHA', 'N.BHARATH', 'Dept: ECE<br>TEAM: DECORATION', './image/bharath.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        

        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'Photography and videography Team';
        teamContainer.appendChild(categoryTitle);

        addMember('giri', 'G. VISHNU', 'Dept: ECE<br>Team: PHOTOGRAPHY', './image/vishnu.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
       
        addMember('newone', 'P.JAYA KRISHNA', 'Dept: ECE<br>Team: videography', './image/jayakrishna.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'Team Fedback and Evalution';
        ;
        teamContainer.appendChild(categoryTitle);

        
        addMember('hema', 'SAI GANESH', 'Dept: ECE<br>Team: FEDBACK & EVALUTION', './image/saiganesh.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
       
        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'DISIPILARY TEAM';
        ;
        teamContainer.appendChild(categoryTitle);

        addMember('hema', 'G.LEELADHAR', 'Dept: ECE<br>Team:  DISIPILARY ', './image/leeladhar.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('hema', 'T.MOHITH REDDY ', 'Dept: ECE<br>Team: DISIPILARY', './image/mohith.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
    categoryTitle = document.createElement('div');
    categoryTitle.className = 'category-title';
    categoryTitle.innerHTML = 'SOCIAL MEDIA TEAM';
    ;
    teamContainer.appendChild(categoryTitle);

    addMember('hema', 'P.GIRI', 'Dept: ECE<br>Team: SOCIAL MEDIA  ', './image/giri.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    });
    addMember('hema', 'M.JAGAN MOHAN KRISHNA', 'Dept: ECE<br>Team: SOCIAL MEDIA  ', './image/jagan mohan.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    });
    
    addMember('hema', 'K.JAYA KRISHNA', 'Dept: ECE<br>Team: SOCIAL MEDIA ', './image/krishna.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    }); addMember('hema', 'S.BINDU SAGAR', 'Dept: ECE<br>Team: SOCIAL MEDIA ', './image/sagar.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    });
    
    categoryTitle = document.createElement('div');
    categoryTitle.className = 'category-title';
    categoryTitle.innerHTML = 'CONTENT CREATION TEAM';
    ;
    teamContainer.appendChild(categoryTitle);

    addMember('hema', 'K.NANDHINI ', 'Dept: ECE<br>Team: CONTENT CREATION ', './image/nandinik.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    });
    addMember('hema', 'MANOJ KUMAR', 'Dept: ECE<br>Team: CONTENT CREATION ', './image/manoj.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    });
    
    categoryTitle = document.createElement('div');
    categoryTitle.className = 'category-title';
    categoryTitle.innerHTML = 'DOCUMETATION TEAM';

    ;
    teamContainer.appendChild(categoryTitle);

    addMember('hema', 'D.NANDHINI ', 'Dept: ECE<br>Team: DOCUMETATION  ', './image/nandhinid.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    });
    addMember('hema', 'CHATHRAPATHI', 'Dept: ECE<br>Team: DOCUMETATION  ', './image/chat.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    });
    addMember('K.BALAJI SAI VRUSHADREE', 'K.BALAJI SAI VRUSHADREE', 'Dept: ECE<br>TEAM:DOCUMETATION', './image/sai.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    });
    addMember('hema', 'R.CHARAN ', 'Dept: ECE<br>Team: DOCUMETATION  ', './image/charan.jpg', {
        instagram: '#',
        github: '#',
        linkedin: '#'
    });
    






        // Add more categories and members as needed

    } else if (section === 'executive') {
        // Add Executive Team members (example)
        categoryTitle = document.createElement('div');
    categoryTitle.className = 'category-title';
    categoryTitle.innerHTML = 'TEAM OF TECHNICAL EVENTS';

    ;
    teamContainer.appendChild(categoryTitle);
        
        addMember('E.NISHITHA', 'E.NISHITHA', 'Dept: ECE<br>Event: PROJECT O ERA', './image/nisitha.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
       

        addMember('dinesh', 'K.ANUSHA', 'Dept: ECE<br>Event: CREATIVITE O ERA', './image/anusha.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });

    
        
        addMember('bN.BHARATH CHAND', 'A.HEMA', 'Dept: ECE<br>Event: PRESENTATION', './image/hemaa.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
       
        

        addMember('vishnu', 'N.KIRAN KUMAR', 'Dept: ECE<br>Event:CIRCUITRON', './image/kirankumar.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('vishnu', 'B.MADHU SUDHAN', 'Dept: ECE<br>Event:CIRCUITRON', './image/madhu.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
        
        
        addMember('bhaskar', 'P.BHASKAR RAMESH SAI', 'Dept: ECE<br>Event:TECH QUIZ', './image/bhaskar.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('J. CHETANA', 'J.CHETANA', 'Dept: ECE<br>Event:TECH QUIZ', './image/chethna.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        

       


        addMember('hema', 'M.JAGAN MOHAN KRISHNA', 'Dept: ECE<br>Event:CRACK THE CODE ', './image/jagan mohan.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
        
      
       

        addMember('pavan', 'P.PAVAN KUMAR', 'Dept: ECE<br>Event: MAD FOR CAD', './image/pavan.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
        
       

        addMember('nishitha', 'PRANAVA SAI', 'Dept: ECE<br>Event: POSTER DESIGN', './image/pranavasai.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        

     

        addMember('kaif', 'D.MAHAMMED KAIF', 'Dept: ECE<br>Event: FRONTEND DESIGN', './image/kaif.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('kaif', 'D.SAKETH', 'Dept: ECE<br>Event: FRONTEND DESIGN', './image/saketh.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });


        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'TEAM OF NON-TECHNICAL EVENTS';
        ;
        teamContainer.appendChild(categoryTitle);

        addMember('chandini', 'P.HARSHANVARDHNA', 'Dept: ECE<br>Event: RUBE-A-CUBE', './image/harsha.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
        
         addMember('bhaskar', 'S.BINDU SAGAR', 'Dept: ECE<br>Event: TREASURE HUNT', './image/sagar.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
       
        addMember('sohitha', 'M.SAI SOHITHA', 'Dept: ECE<br>Event: CROSSWORD & SUDOKU', './image/sohitha.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('kiranmayee', 'K. NIKITHA', 'Dept: ECE<br>Event: COOK WITHOUT FIRE', './image/nikitha.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('kiranmayee', 'D. MOUNISHA', 'Dept: ECE<br>Event: COOK WITHOUT FIRE', './image/mounisha.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('althaf', 'S.P.Mahammad Althaf', 'Dept: ECE<br>Event:MOBILE GAMING', './image/althaf.jpg', {           
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
        addMember('hema', 'M.JAGAN MOHAN KRISHNA', 'Dept: ECE<br>Event:MOBILE GAMING', './image/jagan mohan.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = 'TEAM OF ROBOTIC EVENTS';
        ;
        teamContainer.appendChild(categoryTitle);


        addMember('eswar', 'K.ESWAR', 'Dept: ECE<br>Event: OVER DRIVE', './image/eswar.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
         });
        addMember('bharath', 'SAI SANAMTH', 'Dept: ECE<br>Event: ROBO RACE', './image/sanath.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('bharath', 'NAGA CHIRU DEEP', 'Dept: ECE<br>Event: ROBO RACE', './image/chiru.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        addMember('kirankumar', 'JAYA SUBBA REDDY', 'Dept: ECE<br>Event: BOT A MAZE', './image/subbareddy.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
        
        addMember('leeladhar', 'N.PRAVEEN KUMAR', 'Dept: ECE<br>Event: LINE TRACER', './image/praveen2.jpg', {
            instagram: '#',
            github: '#',
            linkedin: '#'
        });
       

        
        
        
       


        
        

        // Add more executive team members as needed
    }
}
// Function to add member to the team container
function addMember(id, name, details, imagePath, socialLinks) {
    var socialHTML = `
        <ul class="sci">
            <li><a href="${socialLinks.instagram}"><i class="fab fa-instagram"></i></a></li>
            <li><a href="${socialLinks.github}"><i class="fab fa-github"></i></a></li>
            <li><a href="${socialLinks.linkedin}"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
    `;
    var memberHTML = `
    <div class="card" onclick="showDetails('${id}')">
        <div class="imgBx" style="position: relative;">
            <img src="${imagePath}" alt="${name}">
           <img src="./image/trishna.png" class="small-logo" alt="Small Logo" style="position: absolute; top: -5px; right: -40px; width: 130px; height: auto; z-index: 10;">
            <div class="details-overlay" id="${id}-details">
                <h3>${name}</h3>
                <p>${details}</p>
                ${socialHTML}
            </div>
        </div>
    </div>
`;

    var teamContainer = document.getElementById('team-container');
    teamContainer.insertAdjacentHTML('beforeend', memberHTML);
}

// Initial load to show Core Team by default
showSection('core');
