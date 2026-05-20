 const elementoForm = document.getElementById('formulario');

elementoForm.addEventListener('submit', (e) => e.preventDefault());

const elementCor = document.getElementById('cor');

elementCor.addEventListener('input', (e ) => {
    let corNova = e.target.value;

    document.documentElement.style.setProperty('--primary-color', corNova);
});