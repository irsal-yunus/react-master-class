import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

class Detail extends React.Component{
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
        ],
        data:""
    }

    componentDidMount(){
        const id = this.props.match.params.id
        const data = this.state.skills.find(item => item.id === parseInt(id) )
        this.setState({ data})
    }
    render(){
        const { data } = this.state
        return(
            <MainLayout>
                <div style={container}>
                    <h1>{data.name}</h1>
                        <div style={box}>
                            <img src={data.image} alt={data.image} style={img}/>
                            <div>
                                <p>{data.description}</p>
                                <Link to="/">Back To Home</Link>                        
                            </div>
                        </div>
                </div>
            </MainLayout>
        )
        
    }
}

export default Detail

const container = {    
    padding: "0 6rem"    
}

const img = {
    width: "15rem",
    height: "20rem",
    marginRight: "2rem"
}

const box = {
    display: "flex"
}