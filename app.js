let speech = new SpeechSynthesisUtterance();/*use for convert into text to speach*/ 

let addVoices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices(); /*provided all the avalible voice on this devices*/
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));{
        
    };
};

// change voice function

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value]
});

// use function for add all voice are available in device

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})