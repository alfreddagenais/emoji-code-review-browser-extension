<script>
  import eye from './icons/eye.svg'
  import star from './icons/star.svg'
  import arrowLeftRegular from './icons/arrowLeft.svg'
  import arrowLeftLight from './icons/arrowLeft-light.svg'

  let className = ''

  export let name
  export { className as class }

  const icons = {
    'arrow-left-regular': arrowLeftRegular,
    'arrow-left-light': arrowLeftLight,
    eye,
    star
  }
</script>

<style>
  img {
    width: 1em;
  }  
</style>

<img src={icons[name]} alt={`icon: ${name}`} class="icon {name} {className}" />
