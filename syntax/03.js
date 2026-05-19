function MyButton() {
  function handleClick() {
    alert('Vous avez cliqué !');
  }

  return (
    <button onClick={handleClick}>
      Cliquez ici
    </button>
  );
}