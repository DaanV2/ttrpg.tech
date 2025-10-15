<script>
  import { Card, Hr, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import SimpleCard from '../../lib/components/cards/SimpleCard.svelte';
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="center-horizontal">
  <h1 class="p-5 text-4xl">About</h1>
  <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
  <div class="centered-column">
    <SimpleCard
      title="Welcome to ttrpg.tech!"
      text="This project is a personal project to provide tools and generators for tabletop
          games that I play. Built with SvelteKit, TailwindCSS, Flowbite and playwright"
    />
    <Table striped hoverable shadow divClass="border border-primary rounded-2xl">
      <TableHead class="rounded-2xl">
        <TableHeadCell>Dependency</TableHeadCell>
        <TableHeadCell>License</TableHeadCell>
      </TableHead>
      <TableBody>
        <TableBodyRow>
          <TableBodyCell>ttrpg.tech</TableBodyCell>
          <TableBodyCell><span class="font-mono">private</span> and not for commercial use.</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Svelte</TableBodyCell>
          <TableBodyCell><a href="https://github.com/sveltejs/svelte/blob/master/LICENSE" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>TailwindCSS</TableBodyCell>
          <TableBodyCell><a href="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Flowbite &amp; Flowbite Svelte</TableBodyCell>
          <TableBodyCell><a href="https://github.com/themesberg/flowbite/blob/main/LICENSE" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Flowbite Svelte Icons</TableBodyCell>
          <TableBodyCell><a href="https://github.com/joeldesante/flowbite-svelte-icons/blob/main/LICENSE" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Flowbite Typography</TableBodyCell>
          <TableBodyCell><a href="https://github.com/themesberg/flowbite-typography/blob/main/LICENSE" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Playwright</TableBodyCell>
          <TableBodyCell><a href="https://github.com/microsoft/playwright/blob/main/LICENSE" target="_blank">Apache-2.0 License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>ESLint &amp; plugins</TableBodyCell>
          <TableBodyCell><a href="https://github.com/eslint/eslint/blob/main/LICENSE" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Prettier &amp; plugins</TableBodyCell>
          <TableBodyCell><a href="https://github.com/prettier/prettier/blob/main/LICENSE" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>TypeScript</TableBodyCell>
          <TableBodyCell><a href="https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt" target="_blank">Apache-2.0 License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Vite</TableBodyCell>
          <TableBodyCell><a href="https://github.com/vitejs/vite/blob/main/LICENSE" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Globals</TableBodyCell>
          <TableBodyCell><a href="https://github.com/sindresorhus/globals/blob/main/license" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>Svelte Check</TableBodyCell>
          <TableBodyCell><a href="https://github.com/sveltejs/language-tools/blob/master/LICENSE" target="_blank">MIT License</a></TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </Table>
    <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
  </div>
</div>
