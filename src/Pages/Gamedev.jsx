import React, { Component } from 'react'
import Card from '../Components/Card';

import './assets/scss/Gamedev.scss'

import survival from './assets/images/survival.png'
import fruitFight from './assets/images/fruit-fight.png'
import spaceFighter from './assets/images/space-fighter.png'
import tanks from './assets/images/tanks.png'
import stones from './assets/images/7-stones.png'

class Gamedev extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container gamedev-container">
                    <div className="header my-5">
                        <h1>Game Development</h1>
                    </div>
                    <div className="game-portfolio">
                        <Card
                            title="7 Stones"
                            description="The classic '7 Stones' made with Unity. Aimed at recording the timestamps of player input for comparision with their EEG signals for analysis of the player's response time. This is a part of a research project done in IIIT, Hyderabad under the guidance of Dr.Kavita Vemuri."
                            link="https://youtu.be/McmPEi11KS8"
                            img={stones}
                        />
                        <Card
                            title="Survival"
                            description="Co-ordinate your brain with your hands in quickly navigating past the various kinds of obstacles that harm you. Nevertheless, always look out for power-ups. Flaunt your highest score in the leader board, ‘Hall of Fame'. "
                            link="https://play.google.com/store/apps/details?id=com.Teknack.Survival&hl=en"
                            img={survival}
                            />
                        <Card
                            title="Space Fighter"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et nihil, temporibus quisquam consectetur sint saepe corporis ut ducimus magnam sit porro facere ab tempora a aperiam? Obcaecati, quaerat? Consectetur!"
                            img={spaceFighter}
                            />
                        <Card
                            title="Fruit Fight"
                            description="A clone of the successful game 'Fruit Ninja' developed in Unity and coded in C#. A full-fledged functional game built for Android platform with various functionalities like score manager, high score manager, pause manager, bomb shells and so on."
                            img={fruitFight}
                            />
                        <Card
                            title="Tank"
                            description="A huge development on the Unity's tutorial two player one keyboard game 'Tanks' with a tank controlled by CPU attacking the player at each level. A limit has been added over the maximum ammo in a tank and ammo collection points within the game area." 
                            img={tanks}
                            />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Gamedev
