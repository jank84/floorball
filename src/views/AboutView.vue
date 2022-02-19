<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br />
    <va-card>
      <va-card-title>Title </va-card-title>
      <va-card-content
        >Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.</va-card-content
      >
    </va-card>
    <br />
    <va-card>
      <va-image src="https://picsum.photos/400/200" style="height: 200px" />
      <va-card-title>Title</va-card-title>
      <va-card-content
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </va-card-content>
    </va-card>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
