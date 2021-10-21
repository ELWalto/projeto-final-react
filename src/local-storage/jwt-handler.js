export const JwtHandler = {
    JWT_KEY: "JWT",

    // cria um evento customizado
    onChangeEvent: new CustomEvent("onJwtChange"),

    onChange: () => {
        // dispara o evento criado
        window.dispatchEvent(JwtHandler.onChangeEvent)
    },

    setJwt: value => {
        localStorage.setItem(JwtHandler.JWT_KEY, value)
        JwtHandler.onChange()
    },

    getJwt: () => {
        return localStorage.getItem(JwtHandler.JWT_KEY)
    },

    isJwtValid: () => Boolean(JwtHandler.getJwt()),

    clearJwt: () => {
        localStorage.removeItem(JwtHandler.JWT_KEY)
        JwtHandler.onChange()
    }
}