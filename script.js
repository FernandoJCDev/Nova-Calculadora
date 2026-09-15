const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

// Evento de clique nos botões da tela
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

// Evento para capturar as teclas digitadas
window.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    appendValue(key);
  } else if (["+", "-", "*", "/", "."].includes(key)) {
    appendValue(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault(); // Evita que o Enter acione o último botão clicado
    calculateResult();
  } else if (key === "Backspace") {
    // Apaga o último caractere digitado
    inputFieldEl.value = inputFieldEl.value.slice(0, -1);
  } else if (key === "Escape" || key.toLowerCase() === "c") {
    clearResult();
  }
});

inputFieldEl.value = "";

// Função de limpar corrigida
function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  try {
    if (inputFieldEl.value) {
      inputFieldEl.value = eval(inputFieldEl.value);
    }
  } catch (error) {
    inputFieldEl.value = "Erro";
  }
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}