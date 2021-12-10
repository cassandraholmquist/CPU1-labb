import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("Light");

	const toggleTheme = () => {
		if (theme === "Light") {
			setTheme("Dark");
		} else {
			setTheme("Light");
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// class ThemeContextProvider extends Component {
//   state= {
//     isLightTheme: true,
//     light: {text: '#555', ui: '#ddd', bg: '#eee'},
//     dark: {text: '#ddd', ui: '#333', bg: '#555'}
//   }
//   render() {
//     return (
//       <ThemeContext.Provider value={{...this.state}}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }
