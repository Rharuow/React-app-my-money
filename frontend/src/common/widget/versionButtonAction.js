export default version => {
    if (version === 1) return ({ type: "VERSION_APP", payload: 2 })
    return ({ type: "VERSION_APP", payload: 1 })
}