import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,html, input,button {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;

}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*button {
	height: 43px;

	border-radius: 3px;
	border-style: none;
	font-family: 'Roboto';
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #FFFFFF;
	padding: 0 20px;
	&:disabled {
		background-color: lightgray;
	}
}
input {
	background: #FFFFFF;
	border: 1px solid #D5D5D5;
	border-radius: 3px;
	height: 50px;
	margin-bottom: 25px;
	margin-top: 10px;
	padding: 0 10px;
	font-family: 'Roboto';
	font-size: 18px;
	display: flex;
	align-items: center;
	&::placeholder{
		font-style: italic;
	}
	
}*/
input{
width:303px;
height:45px;
margin: 0 36px 6px 36px;
border: 1px solid #D4D4D4;
border-radius:5px;
&::placeholder{
    padding-left:11px;
    font-family: "Lexend Deca";
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color:#DBDBDB;
}
}
`
export default GlobalStyle