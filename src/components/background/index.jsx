import "./style.css";

export default function Background() {

    function goToTop() { window.scrollTo({ top: 500, behavior: 'smooth', }); console.log('teste') };


    return (
        <div className="Background">
            <img src="img/background.jpg" alt="background" style={{ width: '100%' }} />
            <i onClick={() => { goToTop() }} className="arrow fi fi-rr-angle-down"></i>
        </div>
    );
}
