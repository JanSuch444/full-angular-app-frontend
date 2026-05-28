export interface ServerData {
    jmeno: string;
    historie: number[];
}

export async function nactiDataZBackendu(): Promise<ServerData[] | null> {
    try {
        const odpoved = await fetch('http://localhost/eos-backend/status.php');
        if (!odpoved.ok) {
            throw new Error(`Chyba serveru: ${odpoved.status}`);
        }
        return await odpoved.json();
    } catch (chyba) {
        console.error('Chyba při stahování dat:', chyba);
        return null;
    }
}