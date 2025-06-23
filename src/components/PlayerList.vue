<script setup lang="ts">
import  {usePlayers} from "@/composables/usePlayers";

const { name, age, players, addPlayer } = usePlayers();

</script>

<template>
  <div>
    <h2>플레이어 등록</h2>
    <input v-model="name" placeholder="이름 입력" />
    <input v-model.number="age" placeholder="나이 입력" type="number" />
    <button @click="addPlayer">등록</button>

    <h3>등록된 플레이어 목록</h3>

    <ul>
      <li v-for="player in players" :key="player.id">
        {{ player.name }} - {{ player.age }}
      </li>
    </ul>

    <h2>플레이어 수정</h2>
    <input v-model="name_put" placeholder="이름 입력" />
    <input v-model.number="age_put" placeholder="나이 입력" type="number" />
    <button @click="putPlayer">수정</button>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 10px;
}
li {
  margin: 5px 0;
}
</style>