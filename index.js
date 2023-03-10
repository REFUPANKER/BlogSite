var navBar = document.getElementById("NavBar");
function bodyOnScroll() {
    if (document.body.scrollTop > navBar.offsetHeight) {
        navBar.style.backgroundColor = "rgb(50,50,50,0.6)";
        navBar.style.boxShadow = "0vh 1vh 1vh 0vh rgb(20,20,20,0.6)";
    } else {
        navBar.style.backgroundColor = "transparent";
        navBar.style.boxShadow = "none";
    }
}
function AddNewProject(targetTitleID, content, url) {
    var target = document.getElementById(targetTitleID);
    target.innerHTML += "<a target='_blank' class='ProjectsPanelItemURL' href='" + url + "'>" + content + "</a><hr>";
}

AddNewProject("JavaProjects", "Java Console Store", "https://github.com/REFUPANKER/ConsoleStore_WithJava");
AddNewProject("JavaProjects", "Java Binary Converter", "https://github.com/REFUPANKER/BinaryConverter-With-Java");
AddNewProject("JavaProjects", "Java Console Adventure Game", "https://github.com/REFUPANKER/ConsoleAdventureGame_Java");
AddNewProject("JavaProjects", "Java Android Development Mini Hints", "https://github.com/REFUPANKER/JavaAndroid_MiniDetails");
AddNewProject("CSharpProjects", "Csharp MsAcdb ChatApp", "https://github.com/REFUPANKER/Csharp-MsAcdb-ChatApp");
AddNewProject("CSharpProjects", "Hospital System CSharp OOP", "https://github.com/REFUPANKER/HospitalSystemCSharpOOP");
AddNewProject("CSharpProjects", "CSharp Console Wave Effect Test", "https://github.com/REFUPANKER/Console_WaveEffectTest1");
AddNewProject("CSharpProjects", "CSharp WPF Form Movement Code", "https://github.com/REFUPANKER/CSharp-WPF-Form-Movement-Code");
AddNewProject("CSharpProjects", "CSharp Async Web Scrape", "https://github.com/REFUPANKER/CSharp_AsyncWebScrape");
AddNewProject("CSharpProjects", "CSharp YouTube MP3 Downloader", "https://github.com/REFUPANKER/YouTube-MP3-Downloader-CSharp");
AddNewProject("CSharpProjects", "CSharp Invert Colors Black To White", "https://github.com/REFUPANKER/InvertColors_BtoW");
AddNewProject("PythonProjects", "DiscordPy iPyBot", "https://github.com/REFUPANKER/DiscordPy-iPyBot");
AddNewProject("PythonProjects", "Py WeeklyQuestionSolving2", "https://github.com/REFUPANKER/Py_WeeklyQuestionSolving2");
AddNewProject("PythonProjects", "Python Writing textto image", "https://github.com/REFUPANKER/Python-Writing-text-to-image");

