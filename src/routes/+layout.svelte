<script>
  import { page } from '$app/state';
  import {
    DarkMode,
    Footer,
    FooterCopyright,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    Navbar,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl
  } from 'flowbite-svelte';
  import { GithubSolid } from 'flowbite-svelte-icons';
  import '../app.css';

  let activeUrl = $derived(page.url.pathname);

  let { children } = $props();
</script>

<div class="layout-wrapper">
  <Navbar class="bg-tertiary ">
    <NavBrand href="/">
      <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white"
        >ttrpg.tech</span
      >
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/calendar">Calendar</NavLi>
      <NavLi href="/generators">Generators</NavLi>
      <NavLi href="/tools">Tools</NavLi>
      <NavLi href="/about">About</NavLi>
      <DarkMode class="text-primary-500 bg-white" />
    </NavUl>
  </Navbar>

  <div class="layout-main">
    {@render children()}
  </div>

  <Footer footerType="socialmedia" class="bg-primary ">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0"></div>
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Social Media
          </h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="https://github.com/daanv2">GitHub</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/about">About</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="https://github.com/daanv2" by="DaanV2" />
      <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
        <FooterIcon href="https://github.com/daanv2">
          <GithubSolid
            class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          />
        </FooterIcon>
      </div>
    </div>
  </Footer>
</div>

<style>
  .layout-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .layout-main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }
</style>
