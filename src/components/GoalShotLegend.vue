<template>
      <table>
        <tr>
          <td>
            <va-icon size=".9rem" name="check_box_outline_blank" />
            <va-icon size=".9rem" name="arrow_back" />
          </td>
          <td>Towards goal gate: Blocked by goal keeper</td>
          <td>{{goal_icons[Goal_shot_outcome[Goal_shot_outcome.Block_goalkeeper]]}}</td>
        </tr>
        <tr>
          <td>
            <va-icon size=".9rem" name="check_box_outline_blank" />
            <va-icon size=".9rem" name="arrow_forward" />
          </td>
          <td>Towards goal gate: Missed shot</td>
          <td>{{goal_icons[Goal_shot_outcome[Goal_shot_outcome.Miss]]}}</td>
        </tr>
        <tr>
          <td>
            <va-icon size=".9rem" name="arrow_upward" />
          </td>
          <td>Successfull goal scored</td>
          <td>{{goal_icons[Goal_shot_outcome[Goal_shot_outcome.Scored]]}}</td>
        </tr>
        <tr>
          <td>
            <va-icon size=".9rem" name="arrow_downward" />
          </td>
          <td>Blocked by a player</td>
          <td>{{goal_icons[Goal_shot_outcome[Goal_shot_outcome.Block_player]]}}</td>
        </tr>
      </table>
</template>

<script setup lang="ts">
import { Goal_shot_outcome, goal_icons } from "@/utils"
</script>
