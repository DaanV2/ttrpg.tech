<script>
  import { afterNavigate, replaceState } from '$app/navigation';
  import { page } from '$app/state';
  import {
    Button,
    Hr,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Textarea
  } from 'flowbite-svelte';
  import { determineDice, determineSectionSize, Dice } from '../../../lib/dices';

  const placeHolder = [
    'jump the gap',
    'throw a grappling hook',
    'pray to a god',
    'regrets, and turn back'
  ].join('\n');
  let text = $state('');
  let rolledtext = $state('');
  let items = $derived(
    text
      .trim()
      .split('\n')
      .map((line) => line.trim())
  );
  let dice = $derived(determineDice(items.length));
  let sectionSize = $derived(determineSectionSize(dice, items.length));

  /**
   * @param n {string}
   */
  function inputChanged() {
    //Base64 encode
    const q = btoa(text);
    page.url.searchParams.set('items', q);
    replaceState(page.url, page.state);
  }

  /**
   *
   * @param index {number}
   * @param sectionSize {number}
   */
  function rangeText(index, sectionSize) {
    if (sectionSize <= 1) {
      return `${index + 1}`;
    }

    let start = index * sectionSize + 1;
    let end = start + sectionSize - 1;

    if (index == items.length - 1) {
      return `${start}..`;
    }

    return `${start}-${end}`;
  }

  afterNavigate(() => {
    const q = page.url.searchParams.get('items');
    if (typeof q !== 'string') {
      return;
    }
    //Base64 decode
    text = atob(q);
    inputChanged();
  });

  function rollDice() {
    const v = Dice.roll(dice);
    const i = Math.floor(v / sectionSize);
    const item = items[i] ?? items[items.length - 1];
    rolledtext = `Rolled ${v}: ${item}`;
  }
</script>

<svelte:head>
  <title>Tablelizer</title>
</svelte:head>

<div class="flex w-full flex-col">
  <div class="flex w-full flex-col items-center justify-center">
    <h2 class="p-5 text-4xl">Tablelizer</h2>
    <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
    <Textarea
      divClass="w-full sm:w-3/5"
      id="input"
      rows={10}
      bind:value={text}
      oninput={inputChanged}
      placeholder={placeHolder}
    >
      {#snippet footer()}
        <div class="flex items-center justify-between">
          <Button disabled={items.length < 2} class="bg-red-800 hover:bg-red-600" onclick={rollDice}
            >Roll</Button
          >
          <p class="bold mx-2 w-full" aria-label="roll">{rolledtext}</p>
        </div>
      {/snippet}
    </Textarea>

    <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />

    <Table striped hoverable shadow divClass="w-full sm:w-3/5" class="rounded">
      <TableHead class="bg-tertiary text-tertiary-text" >
        <TableHeadCell>Roll d{dice}</TableHeadCell>
        <TableHeadCell>Action</TableHeadCell>
      </TableHead>
      <TableBody>
        {#each items as item, index}
          <TableBodyRow>
            <TableBodyCell>{rangeText(index, sectionSize)}</TableBodyCell>
            <TableBodyCell>{item}</TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>

    <Hr class="mx-auto my-4 h-1 w-48 rounded-sm md:my-10" />
  </div>
</div>
