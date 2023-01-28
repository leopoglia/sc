import "./style.css";

export default function Background() {

    function goToTop() { window.scrollTo({ top: 420, behavior: 'smooth', }); console.log('teste') };


    return (
        <div className="background">
            <img src="img/background.jpg" alt="background"  />
            <i onClick={() => { goToTop() }} className="arrow fi fi-rr-angle-down"></i>
        </div>
    );
}
