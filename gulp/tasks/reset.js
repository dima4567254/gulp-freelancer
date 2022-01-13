import del from "del";
export const reset = () => {
    return del(app.path.clean);
}

//удаляет папку с результатом