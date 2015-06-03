$(function () {
    var offset = $('#menu').offset().top;
    var jElement = $('#menu');
    var jElementPesquisa = $('#pesquisa');
    var jElementBtn = $('#pesquisa button');
    var jElementInput = $('#pesquisa input');
    var jElementLogoTipo = $('#logotipo');
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            jElement.css({
                'position': 'fixed',
                'top': '0px',
                'width': '100%',
                'background': '#05046b', /* Old browsers */
                'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr=#0613a5, endColorstr=#05046b,GradientType=0 )' /* IE6-9 */
            });
            jElementPesquisa.css({
                'left': '50%',
                'width': '600px',
                '- webkit - transition': 'all 0.3s',
                'transition': 'all 0.3s'
            });
            jElementBtn.css({
                'margin-left': '560px',
                '- webkit - transition': 'all 0.3s',
                'transition': 'all 0.3s'
            });
            jElementInput.css({
                'width': '565px',
            });
            document.getElementById("logotipo").style.visibility = "visible";
            document.getElementById("botao").style.visibility = "hidden";
        } else {
            document.getElementById("logotipo").style.visibility = "hidden";
            document.getElementById("botao").style.visibility = "visible";
            jElement.css({
                'position': 'absolute',
                'top': '160px',
                'background': 'transparent' /* Old browsers */
            });
            jElementPesquisa.css({
                'left': '75%',
                'width': '250px'
            });
            jElementBtn.css({
                'margin-left': '210px'
            });
            jElementInput.css({
                'width': '215px'
            });
        }
    });
});