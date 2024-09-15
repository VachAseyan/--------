export const canvas = document.getElementById("board")
export const ctx = canvas.getContext("2d")
export const getRandomNumber = (a, b) => Math.floor(Math.random() * (b - a)) + a
export const getRandomColor = () => "#" + getRandomNumber(0, 0xffffff).toString(16)