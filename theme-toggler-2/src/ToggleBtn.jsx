import useTheme from "./Context";

function ToggleBtn() {
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onToggle = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        darkModeStatus ? darkTheme() : lightTheme();
    }

  return (
      <input 
        type="checkbox" 
        onChange={onToggle}
        checked={themeMode == "dark"}
        className="h-6 w-6 rounded-lg"
      />
  );
}

export default ToggleBtn
