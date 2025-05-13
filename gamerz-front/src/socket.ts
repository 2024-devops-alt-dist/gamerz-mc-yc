import io from 'socket.io-client';

const URL = "https://gamerz-fv91.onrender.com/";

export const socket = io(URL);