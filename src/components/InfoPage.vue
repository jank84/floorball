<script setup lang="ts">
import InfoPageItem from "./InfoPageItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>

  <InfoPageItem>
    <template #icon>
      <va-icon size="3rem" name="exposure_plus_1" />
    </template>
    <template #heading>Counter</template>
    Counter page to count game events
  </InfoPageItem>
  <br />

  <InfoPageItem>
    <template #icon>
      <va-icon size="3rem" name="swipe" />
    </template>
    <template #heading>Goal shot editor</template>
    Page to record goal shots.<br />
    <va-icon size=".9rem" name="screen_rotation" /> Rotate phone for bigger view port.<br />
    <br />
    <div class="border-box">
      <h2>Usage</h2>
      Click/touch and <b>hold</b> on playground to mark a goal shot.<br />
      Drag from goal shot point to <br />

      <table>
        <tr>
          <td>
            <va-icon size=".9rem" name="check_box_outline_blank" />
            <va-icon size=".9rem" name="arrow_back" />
          </td>
          <td>Towards goal gate: Blocked by goal keeper</td>
        </tr>
        <tr>
          <td>
            <va-icon size=".9rem" name="check_box_outline_blank" />
            <va-icon size=".9rem" name="arrow_forward" />
          </td>
          <td>Towards goal gate: Missed shot</td>
        </tr>
        <tr>
          <td>
            <va-icon size=".9rem" name="arrow_upward" />
          </td>
          <td>Successfull goal scored</td>
        </tr>
        <tr>
          <td>
            <va-icon size=".9rem" name="arrow_downward" />
          </td>
          <td>Blocked by a player</td>
        </tr>
      </table>

    </div>

  </InfoPageItem>
  <br />

  <InfoPageItem>
    <template #icon>
      <va-icon size="3rem" name="open_in_new" />
    </template>
    <template #heading>Open full screen goal shots overview</template>
    Opens goal shot overview without nav bar.
  </InfoPageItem>
  <br />
</template>


<style scoped>
.border-box {
  border-color: rgb(0, 0, 0) !important;
  border: 1px solid #ccc !important;
  padding: 0.6em;
}
</style>