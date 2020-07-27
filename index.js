function dsbutton(options) {
    let buttons = document.querySelectorAll('.dsbutton');

    if (options.background_color === 'blue')
        options.background_color = '#32d2f3'
        else 
        options.background_color = '#cccccc'

        buttons.forEach(estilos => {
            estilos.style.backgroundColor = `${options.background_color}`;
            estilos.style.width = '100px';
            estilos.style.height = '30px';
            estilos.style.borderRadius = '50px';
            estilos.style.color = '#ffffff';
            estilos.style.textAlign = 'center';
            estilos.style.lineHeight = '26px';
        })
}

module.exports.dsbutton = dsbutton;