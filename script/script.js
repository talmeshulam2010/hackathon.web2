// This is a conceptual example for your script.js
document.addEventListener('DOMContentLoaded', () => {
    const gradeSelect = document.getElementById('gradeSelect');
    const selectedGradeDisplay = document.getElementById('selectedGradeDisplay'); // Assuming you want to display it

    if (gradeSelect) {
        gradeSelect.addEventListener('change', function() {
            const selectedGrade = this.value;
            // Action to perform on "auto-confirm"
            // For example, update the display or enable the subject selection
            if (selectedGradeDisplay) {
                selectedGradeDisplay.textContent = `הכיתה שנבחרה: ${selectedGrade}`;
            }
            console.log(`Class selected and auto-confirmed: ${selectedGrade}`);
            
            // Add any other logic that should happen when a class is chosen,
            // e.g., fetching subjects for that class, showing the subject form, etc.
            
            // If the original form submission had other effects, replicate them here.
            // For instance, if it was preventing default and then doing something via AJAX:
            // event.preventDefault(); // Not needed here as there's no form submission for grade anymore
            // performGradeConfirmationLogic(selectedGrade);
        });
    }




document.getElementById("startButton").addEventListener("click", function() {
  document.getElementById("initial-content").style.display = "none";
  document.getElementById("selection-content").classList.remove("hidden");
});

document.getElementById("gradeForm").addEventListener("submit", function(e) {           
  e.preventDefault();
  var selectedGrade = document.getElementById("gradeSelect").value;
  document.getElementById("selectedGradeDisplay").textContent = selectedGrade;
  localStorage.setItem('selectedGrade', selectedGrade);
  console.log(localStorage.getItem("selectedGrade"))



    
  // Check if "פיזיקה" option already exists to avoid duplicates
  const physicsOptionExists = Array.from(document.getElementById("subjectSelect").options).some(option => option.value === 'פיזיקה');

  if (selectedGrade === "כיתה ט" && !physicsOptionExists) {
    const physics_opt = document.createElement('option');
    physics_opt.textContent = 'פיזיקה';
    physics_opt.value = 'פיזיקה'; // Add a value for the option
    document.getElementById("subjectSelect").appendChild(physics_opt);
  } else if (selectedGrade !== "כיתה ט" && physicsOptionExists) {
    // Remove "פיזיקה" option if grade is not 9th and it exists
    const subjectSelect = document.getElementById("subjectSelect");
    for (let i = 0; i < subjectSelect.options.length; i++) {
      if (subjectSelect.options[i].value === 'פיזיקה') {
        subjectSelect.remove(i);
        break; // Exit the loop after removing
      }
    }
  }
});

document.getElementById("subjectForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let selectedSubject = document.getElementById("subjectSelect").value;
  console.log("מקצוע שנבחר:", selectedSubject);

  let subjectRedirectURL;

  if (selectedSubject === "מתמטיקה") {
    subjectRedirectURL = "/Math.html";
  } else if (selectedSubject === "מדעים") {
    subjectRedirectURL = "/Science.html";
  } else if (selectedSubject === "אנגלית") {
    subjectRedirectURL = "/English.html";
  } else if (selectedSubject === "עברית") {
    subjectRedirectURL = "/Hebrew.html";
  } else if (selectedSubject === "פיזיקה") {
    subjectRedirectURL = "/Physics.html";
  }

  if (subjectRedirectURL) {
    window.location.href = "./pages"+subjectRedirectURL;
  }
});

function home() {
  window.location.href = ".././index.html";
}

function sendMessage() {
  const input = document.getElementById('messageInput');
  const messages = document.getElementById('chatMessages');

  if (input.value.trim() !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.style.margin = '5px';
    messageDiv.style.padding = '8px';
    messageDiv.style.backgroundColor = '#e8f5e9';
    messageDiv.style.borderRadius = '8px';
    messageDiv.textContent = input.value;

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
    input.value = '';
  }
}

function checkAnswers() {
    let answers;
    const currentPage = window.location.pathname;
    if (currentPage.includes('English')) {
        answers = {
            q1: 'goes',
            q2: 'I am learning English.',
            q3: 'on',
            q4: 'went',
            q5: 'I have gone to the park.',
            q6: 'sad',
            q7: 'An',
            q8: 'book',
            q9: 'on',
            q10: 'small'
        };
    } else if (currentPage.includes('Hebrew')) {
        answers = {
            q1: 'קבוצה של דברים ארוזים',
            q2: 'כִּתָּה',
            q3: 'אני רוצה ללמוד עברית',
            q4: 'עבר',
            q5: 'שטויות',
            q6: 'חוֹלֵם',
            q7: 'להסתכל למעלה',
            q8: 'לרקוד',
            q9: 'הם צריכים את המילה \'אתמול\' אחרי פועל בזמן עבר',
            q10: 'מַדָּף'
        };
    } else if (currentPage.includes('Physics')) {
        answers = {
            q1: 'חוק ההתמדה',
            q2: 'ניוטון',
            q3: 'אנרגיה גרעינית',
            q4: 'אנרגיית חום',
            q5: 'אנרגיה לא נעלמת, היא יכולה רק להתממש בצורות שונות',
            q6: 'אנרגיה קינטית',
            q7: 'דינמומטר',
            q8: 'אנרגיה פוטואלקטרית',
            q9: 'אנרגיה כימית',
            q10: 'חוק ניוטון הראשון'
        };
    } else if (currentPage.includes('Science')) {
        answers = {
            q1: 'דנ"א',
            q2: 'תא',
            q3: 'אנרגיית חום ואור',
            q4: 'כליה',
            q5: 'מים',
            q6: 'מיטוכונדריה',
            q7: 'היסטידין',
            q8: 'פוטוסינתזה',
            q9: 'עצם ארוכה',
            q10: 'פוטוסינתזה'
        };
    } else if (currentPage.includes('Math')) {
        answers = {
            q1: '13',
            q2: '24',
            q3: '8x',
            q4: '7',
            q5: '2',
            q6: '9',
            q7: '49π',
            q8: 'x^2 + 6x + 9',
            q9: '-4',
            q10: '11'
        };
    }

    const form = document.getElementById('quizForm');
    if (!form) return;

    // Check if all questions are answered
    for (let i = 1; i <= 10; i++) {
        const radios = form.querySelector(`input[name="q${i}"]:checked`);
        if (!radios) {
            alert('נא לענות על כל השאלות לפני שליחת התשובות');
            return;
        }
    }

    let score = 0;
    // Reset previous incorrect markings
    document.querySelectorAll('.incorrect-answer').forEach(el => {
        el.classList.remove('incorrect-answer');
    });

    for (let i = 1; i <= 10; i++) {
        const radios = form.querySelector(`input[name="q${i}"]:checked`);
        const questionDiv = radios.closest('.question');

        if (radios.value === answers[`q${i}`]) {
            score++;
        } else {
            questionDiv.classList.add('incorrect-answer');
        }
    }

    const resultElement = document.getElementById('result');
    if (resultElement) {
        if (currentPage.includes('English')) {
            resultElement.innerHTML = `Your score: ${score}/10`;
        } else {
            resultElement.innerHTML = `${score}/10`;
        }
    }
}


function math_grade_check(){
      var selectedGrade = localStorage.getItem('selectedGrade');
      if (selectedGrade === "כיתה ט") {
        document.getElementById("M9").style.display = "block";
        document.getElementById("M8").style.display = "none";
        document.getElementById("M7").style.display = "none";
      }
    
      else if (selectedGrade === "כיתה ח") {
        document.getElementById("M9").style.display = "none";
        document.getElementById("M8").style.display = "block";
        document.getElementById("M7").style.display = "none";
      }
    
      else if (selectedGrade === "כיתה ז") {
         document.getElementById("M9").style.display = "none";
         document.getElementById("M8").style.display = "none";
         document.getElementById("M7").style.display = "block";
        }
        }


    function Science_grade_check(){
          var selectedGrade = localStorage.getItem('selectedGrade');
          if (selectedGrade === "כיתה ט") {
            document.getElementById("S9").style.display = "block";
            document.getElementById("S8").style.display = "none";
            document.getElementById("S7").style.display = "none";
          }

          else if (selectedGrade === "כיתה ח") {
            document.getElementById("S9").style.display = "none";
            document.getElementById("S8").style.display = "block";
            document.getElementById("S7").style.display = "none";
          }
    
          else if (selectedGrade === "כיתה ז") {
             document.getElementById("S9").style.display = "none";
             document.getElementById("S8").style.display = "none";
             document.getElementById("S7").style.display = "block";
            }
            }


function Hebrew_grade_check(){
      var selectedGrade = localStorage.getItem('selectedGrade');
      if (selectedGrade === "כיתה ט") {
        document.getElementById("H9").style.display = "block";
        document.getElementById("H8").style.display = "none";
        document.getElementById("H7").style.display = "none";
      }

      else if (selectedGrade === "כיתה ח") {
        document.getElementById("H9").style.display = "none";
        document.getElementById("H8").style.display = "block";
        document.getElementById("H7").style.display = "none";
      }

      else if (selectedGrade === "כיתה ז") {
         document.getElementById("H9").style.display = "none";
         document.getElementById("H8").style.display = "none";
         document.getElementById("H7").style.display = "block";
        }
        }


function English_grade_check(){
      var selectedGrade = localStorage.getItem('selectedGrade');
      if (selectedGrade === "כיתה ט") {
        document.getElementById("E9").style.display = "block";
        document.getElementById("E8").style.display = "none";
        document.getElementById("E7").style.display = "none";
      }

      else if (selectedGrade === "כיתה ח") {
        document.getElementById("E9").style.display = "none";
        document.getElementById("E8").style.display = "block";
        document.getElementById("E7").style.display = "none";
      }

      else if (selectedGrade === "כיתה ז") {
         document.getElementById("E9").style.display = "none";
         document.getElementById("E8").style.display = "none";
         document.getElementById("E7").style.display = "block";
        }
        }
