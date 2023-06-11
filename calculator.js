function appendToScreen(value) {
    document.getElementById('result').value += value;
  }
  
  function calculateResult() {
    let input = document.getElementById('result').value;
    let result;
  
    try {
      result = eval(input);
      if (isNaN(result)) {
        result = 'Error';
      }
    } catch (error) {
      result = 'Error';
    }
  
    document.getElementById('result').value = result;
  }
  
  function clearScreen() {
    document.getElementById('result').value = '';
  }
  