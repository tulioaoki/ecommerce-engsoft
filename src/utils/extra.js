export default function generateUID() {
  return `not_created${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
}

export const isLogged = () => (
  (localStorage.getItem("token") !== 'undefined' && typeof localStorage.getItem("token") !== 'undefined')
)