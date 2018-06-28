import React, { Component } from 'react';
import { Animated, View, Text } from 'react-native';

class AnimatedBar extends Component {
    constructor(props) {
        super(props);
        this._width = new Animated.Value(0);
    }

    componentDidMount() {
        this.animateTo(this.props.delay, this.props.value);
    }

    componentWillReceiveProps(nextProps) {
        this.animateTo(nextProps.delay, nextProps.value);
    }

    animateTo = (delay, value) => {
        Animated.sequence([
            Animated.delay(delay),
            Animated.timing(this._width, {
                toValue: value,
            }),
        ]).start();
    }

    render() {
        const barStyles = {
            backgroundColor: '#1ABC9C',
            height: this._width,
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            width: 20,
            margin:4
        };
        const emptyStyle = {
            backgroundColor: 'white',
            width: 20,
            height: 150,
            margin: 4,
            position: 'absolute',
            top: 35,
            borderBottomRightRadius: 3,
            borderBottomLeftRadius: 3,
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
        };

        const textStyle = {
            color: 'white',
            fontSize: 11,
            transform: [{
                rotate: '180deg'
            }],
            textAlign: 'center',
            marginTop: 20
        };

        return (
            <View>
            <Text style={textStyle}>{this.props.value}</Text>
            <View style={emptyStyle}></View>
            <Animated.View style={barStyles} />
            </View>
        );
    }
}

export default AnimatedBar;
