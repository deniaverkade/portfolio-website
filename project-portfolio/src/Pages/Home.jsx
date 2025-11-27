

const Home = () => {
    return (
        <div className="homepage">
            <div className="imgcontainer">
                <img className="h_img1" src="/images/homepage_img1.jpg" />
                <img className="h_img2" src="/images/homepage_img2.jpg" />
                <img className="h_img3" src="/images/homepage_img3.jpg" />
            </div>
            <img className="homepagepic" src="/images/homepage_profile.jpg" />
            <div className="homepagebox">
                <h1 className="homepageh1">Portfolio</h1>
                <h2 className="homepageh2">Denia Verkade</h2>
            </div>
        </div>
    );
}

export default Home;