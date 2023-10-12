import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Deguzman from  "../images/Nerl.jpg"


function About() {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
            <div className="col-12 col-lg-8">
            <h1 className="font-namay-style h1-font">About Me</h1>
            <p className="fs-5">Hey there! I'm a computer science graduate from UST-L (University of Santo Tomas-Legazpi). While coding and technology have been my academic and professional pursuits, there's another side to me that often takes the spotlight when I have some free time.</p>
            <p className="fs-5">When I'm not deep into coding or solving tech challenges, you can often catch me engrossed in the captivating world of manga. It's more than just a hobby; it's a passion that I wholeheartedly embrace. Exploring the pages of manga, I delve into a myriad of stories, each offering a unique adventure, a glimpse into different cultures, and a fantastic escape from reality.</p>
            </div>
            <div className="col-12 col-lg-4">
                <img src={Deguzman} className="w-100 rounded-circle" alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default About;