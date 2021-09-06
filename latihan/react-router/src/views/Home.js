import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Home extends React.Component{
    state = {
        skills: [
            {
                id: 1,
                name: "Javascript",
                description: "Javascript description",
                image: require("../images/js.png").default
            },
            {
                id: 2,
                name: "React",
                description: "React description",
                image: require("../images/react.png").default
            },
            {
                id: 3,
                name: "Vue",
                description: "Vue description",
                image: require("../images/vuejs.jpeg").default
            },
            {
                id: 4,
                name: "Svelte",
                description: "Svelte description",
                image: require("../images/sveltejs.png").default
            }
        ]
    }
    render(){
        const { skills } = this.state
        return(
            <div>
                <Navbar />
                    <h1 style={{ paddingLeft: "6rem"}}>Home Page</h1>
                    <div style={container}>
                        { skills.map(item =>
                            <div key={item.id} style={card}>
                                <img src={item.image} alt={item.name} style={img}/>
                                <h3>{item.name}</h3>
                            </div>   
                        )}
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Home

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between"
}

const card = {
    width: "20%",
    height: "15rem"
}

const img = {
    width: "100%",
    height: "100%"
}

