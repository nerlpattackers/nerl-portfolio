import Marina from "../images/marina.jpg"
import Deguzman from  "../images/Nerl.jpg"
import Laptop from "../images/laptop.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import Calculate from "../images/calculate.png"
import Rps from "../images/RPS.jpg"

const Projects = () => {
    return ( 
        <>
<div class="container">
    <div class="row w-100">
        <h1>Projects</h1>
        <p>These projects serve as tangible illustrations of my proficiency, offering concise descriptions along with links to code repositories and live demonstrations. They exemplify my capacity to address complex challenges, adeptly embrace diverse technologies, and effectively manage project endeavors.</p>
        <div class="col-12 col-lg-6 pb-3">
            <div class="hovereffect">
                <img class="img-fluid w-100" src={Marina} alt=""/>
                <div class="overlay">
                   <h2>Mari na sa Albay!</h2>
                   <p>Mari na sa Albay website is for people who are looking to explore and experience thrilling adventures, beautiful nature, rich culture, foods in Albay,  a captivating province in the Philippines. </p>
            
                   <a class="info" href="https://github.com/nerlpattackers/MP1_WD76_DEGUZMAN" target="_blank">Github</a>
                   <a class="info" href="https://nerlpattackers.github.io/MP1_WD76_DEGUZMAN/" target="_blank">Demo</a>
                </div>
            </div>
        </div>

        {/* Repeat the above code block three more times to create 4 cards */}
        <div class="col-12 col-lg-6 pb-3">
            <div class="hovereffect">
                <img class="img-fluid w-100" src={Laptop} alt=""/>
                <div class="overlay">
                   <h2>LaptopHaven</h2>
                   <p>LaptopHaven is for individuals just like us who are on the lookout for their perfect laptop. We created LaptopHaven as one-stop destination for anyone seeking a hassle-free and enjoyable laptop shopping experience.</p>
                   <a class="info" href="" target="_blank">Github</a>
                   <a class="info" href="#" target="_blank">Demo</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6 pb-3">
            <div class="hovereffect">
                <img class="img-fluid w-100" src={Calculate} alt=""/>
                <div class="overlay">
                   <h2>Binary Converter</h2>
                   <p>Introducing my versatile Number and Text Calculator website! This all-in-one digital tool is your gateway to seamlessly convert between binary, decimal, hexadecimal, and text representations. Whether you're a tech-savvy coder, a student tackling numeric conversions, or simply curious about the power of data representation, our website has you covered</p>
                   <a class="info" href="https://github.com/nerlpattackers/WD76_EXERCISE13_DEGUZMAN" target="_blank">Github</a>
                   <a class="info" href="https://nerlpattackers.github.io/WD76_EXERCISE13_DEGUZMAN/" target="_blank">Demo</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6 pb-3">
            <div class="hovereffect">
                <img class="img-fluid w-100" src={Rps} alt=""/>
                <div class="overlay">
                   <h2>Rock Paper Scissor</h2>
                   <p>Whether you're a casual player looking for a quick game or a seasoned RPS strategist seeking to refine your skills, RPS Master has something for everyone.</p>
                   <a class="info" href="https://github.com/nerlpattackers/rockpaperscissor" target="_blank">Github</a>
                   <a class="info" href="https://nerlpattackers.github.io/rockpaperscissor/" target="_blank">Demo</a>
                </div>
            </div>
        </div>

        {/* Repeat the above code block two more times to create a total of 4 cards */}
    </div>
</div>

        </>
     );
}
 
export default Projects;