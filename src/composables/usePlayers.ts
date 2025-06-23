import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Player } from '@/types/Player'

export function usePlayers() {
    const name = ref<string>('')
    const age = ref<number>(0)
    const players = ref<Player[]>([])

    const name_put = ref<string>('')
    const age_put = ref<number>(0)

    const fetchPlayers = async (): Promise<void> => {
        try {
            const res = await axios.get<Player[]>('http://localhost:8080/api/players')
            players.value = res.data
        } catch (e) {
            console.error('조회 실패:', e)
        }
    }

    const addPlayer = async (): Promise<void> => {
        try {
            await axios.post('http://localhost:8080/api/players', {
                name: name.value,
                age: age.value
            })
            name.value = ''
            age.value = 0
            fetchPlayers()
        } catch (e) {
            console.error('등록 실패:', e)
        }
    }

    const putPlayer = async (): Promise<void> => {
        try {
            
        }catch (e) {

        }
    }



    onMounted(fetchPlayers)

    return {
        name,
        age,
        players,
        fetchPlayers,
        addPlayer
    }
}
