import * as React from 'react';
import { Component } from 'react';

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);
const getOffset = (val = 0) =>
  Math.round(((100 - Math.min(val, 100)) / 100) * diameter);

class ProgressBar extends Component {
  static defaultProps = {
    progress: 0,
    animate: true,
    animationDuration: '1s',
    showPercentage: true,
    showPercentageSymbol: true,
    progressColor: 'rgb(76, 154, 255)',
    bgColor: '#ecedf0',
    textColor: '#6b778c',
    size: '100',
    lineWidth: '25',
    percentSpacing: 10,
    textStyle: { font: 'bold 4rem Helvetica, Arial, sans-serif' },
    totalQuestions: 1,
    questionNumber: 1,
  };

  get text() {
    const {
      showPercentage,
      textColor,
      textStyle,
      questionNumber,
      totalQuestions,
    } = this.props;
    if (!showPercentage) return;

    return (
      <text
        style={textStyle}
        fill={textColor}
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {questionNumber} / {totalQuestions}
      </text>
    );
  }

  render() {
    const { text } = this;
    const {
      size,
      bgColor,
      progressColor,
      lineWidth,
      animate,
      animationDuration,
      roundedStroke,
      responsive,
      onAnimationEnd,
      questionNumber,
      totalQuestions,
    } = this.props;
    const currentProgress = (questionNumber * 100) / totalQuestions;
    const strokeDashoffset = getOffset(currentProgress);
    const transition = animate
      ? `stroke-dashoffset ${animationDuration} ease-out`
      : undefined;
    const strokeLinecap = roundedStroke ? 'round' : 'butt';
    const svgSize = responsive ? '100%' : size;

    return (
      <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
        <circle
          stroke={bgColor}
          cx="175"
          cy="175"
          r="175"
          strokeWidth={lineWidth}
          fill="none"
        />
        <circle
          stroke={progressColor}
          transform="rotate(-90 175 175)"
          cx="175"
          cy="175"
          r="175"
          strokeDasharray="1100"
          strokeWidth={lineWidth}
          strokeDashoffset="1100"
          strokeLinecap={strokeLinecap}
          fill="none"
          style={{ strokeDashoffset, transition }}
          onTransitionEnd={onAnimationEnd}
        />
        {text}
      </svg>
    );
  }
}

export default ProgressBar;
