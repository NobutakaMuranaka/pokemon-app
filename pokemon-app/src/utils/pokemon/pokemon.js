export const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data));
    });
};

export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data));
    });
};

// Promise（非同期処理）についてメモ
// API取得やDB接続は開発者やユーザーでは保証できない
// 成功（resolve）と失敗（reject）の2パターンを想定する必要がある
// thenメソッドに処理内容を書く（成功時の非同期処理になっている）
// catchメソッドにはエラー処理を書く（失敗時の非同期処理になっている）