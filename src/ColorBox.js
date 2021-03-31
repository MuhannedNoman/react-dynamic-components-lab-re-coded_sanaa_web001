export default class ColorBox extends Component {
<<<<<<< HEAD
  render() {
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{ opacity: this.props.opacity }}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      );
    } else {
      return null;
    }
  }
}
=======
  
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }
  
}
>>>>>>> 59d4a5c730142d6af8f847ff89d496e4acea77e4
