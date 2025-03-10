import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import '../../stylesheet/guest.css'; 
import uuidv4 from "uuid";
import { config } from "react-spring";
import confetti from 'canvas-confetti';

let slides = [
  {
    key: 1,
    content: "1",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 2,
    content: "2",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 3,
    content: "2",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 4,
    content: "3",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 5,
    content: "4",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 6,
    content: "5",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 7,
    content: "6",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    // IntersectionObserver setup
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setState({ isVisible: true });
          console.log("Contact component is visible");
        } else {
          this.setState({ isVisible: false });
        }
      });
    });

    // Observe the contactRef element
    if (this.contactRef.current) {
      this.observer.observe(this.contactRef.current);
    }
  }

  componentWillUnmount() {
    // Clean up observer when the component is unmounted
    if (this.contactRef.current) {
      this.observer.unobserve(this.contactRef.current);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if visibility state has changed
    if (this.state.isVisible !== prevState.isVisible && this.state.isVisible) {
      // Execute confetti effect when component becomes visible
      confetti({
        particleCount: 2000,
        spread: 700,
        origin: { y: 0.4 },
      });
    }
  }

  render() {
    return (
      <div ref={this.contactRef} className="contain">
        <div className="ml-[100px] mt-[30px] mb-[70px] text-6xl text-white-400">Ready to know about the <div className="text-red-500">GUEST</div></div>
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}

