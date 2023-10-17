export class Task {
    id: number; // A ID Aleatória da Task
    title: string; // O Título da Task
    description: string; // A Descrição
    date: string; // A Data Limite para finalizar
    priority: number; // Quanto mais perto de Zero, mais importante
    status: string; // 'active', 'standby', 'done'
}