const SUPABASE_URL = 'https://ejeezbcksxazezxketdy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZWV6YmNrc3hhemV6eGtldGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODk2MjcsImV4cCI6MTk5MDA2NTYyN30.uPokWkEqMtvLPS0Xe9q-myZON-BEU1EAO4iq7-o0cEk';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createItem(item, quantity) {
    const response = await client
        .from('shopping_list')
        .insert([
            { item: item,
                quantity: quantity },
        ]);
    return checkError(response);
}

export async function deleteItems(id) {
    const response = await client
        .from('shopping_list')
        .delete()
        .match({ user_id: getUser(id).id });

    return checkError(response);
}

export async function getItems() {
    let response = await client
        .from('shopping_list')
        .select('*');

    return checkError(response);
}

export async function completeItem(id) {
//in supabase??????
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../auth');
}

// export function redirectIfLoggedIn() {
//     const user = getUser();
//     if (user) {
//         location.replace('./');
//     }
// }