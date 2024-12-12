<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { nanoid } from 'nanoid';
  import type { Referral } from '../../types/referral';
  
  const dispatch = createEventDispatcher<{create: Referral}>();
  
  let name = '';
  let email = '';
  let rewardAmount = 10;
  
  const handleSubmit = () => {
    const referral: Referral = {
      id: nanoid(),
      code: nanoid(8).toUpperCase(),
      createdAt: new Date(),
      referrerName: name,
      referrerEmail: email,
      referralCount: 0,
      rewardAmount,
      status: 'active'
    };
    
    dispatch('create', referral);
    resetForm();
  };
  
  const resetForm = () => {
    name = '';
    email = '';
    rewardAmount = 10;
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="bg-[#1A1A1A] rounded-xl p-6 space-y-4">
  <h2 class="text-xl font-bold mb-4">Create New Referral</h2>
  
  <div>
    <label for="name" class="block text-sm text-gray-400 mb-1">Name</label>
    <input
      id="name"
      type="text"
      bind:value={name}
      class="input-field w-full"
      required
    />
  </div>
  
  <div>
    <label for="email" class="block text-sm text-gray-400 mb-1">Email</label>
    <input
      id="email"
      type="email"
      bind:value={email}
      class="input-field w-full"
      required
    />
  </div>
  
  <div>
    <label for="reward" class="block text-sm text-gray-400 mb-1">Reward Amount ($)</label>
    <input
      id="reward"
      type="number"
      bind:value={rewardAmount}
      min="1"
      class="input-field w-full"
      required
    />
  </div>
  
  <button type="submit" class="btn-primary w-full">
    Create Referral
  </button>
</form>