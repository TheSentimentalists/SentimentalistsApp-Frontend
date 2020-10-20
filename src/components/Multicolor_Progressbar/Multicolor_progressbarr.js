<ProgressBar
  filledBackground="linear-gradient(to right, #6bb26d, #ee445e)"
  percent={75}
>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        🌞
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        🌤️
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        🌥️
      </div>
    )}
  </Step>
</ProgressBar>