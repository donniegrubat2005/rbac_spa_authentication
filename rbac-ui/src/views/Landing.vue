<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">

    <!-- Navbar -->
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-gray-800">RBAC App</h1>

        <div class="space-x-4">
          <router-link to="/login" class="text-gray-600 hover:text-blue-500">
            Login
          </router-link>
          <router-link
            to="/register"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Register
          </router-link>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="flex-1 flex items-center">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <!-- Left -->
        <div>
          <h2 class="text-4xl font-extrabold text-gray-800 leading-tight">
            Secure Access with <span class="text-blue-500">RBAC</span>
          </h2>

          <p class="mt-4 text-gray-600">
            Build scalable applications with role-based access control using
            Vue 3, Pinia, and Tailwind CSS. Manage permissions, users, and
            features with ease.
          </p>

          <div class="mt-6 flex space-x-4">
            <router-link
              to="/register"
              class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
            >
              Get Started
            </router-link>

            <router-link
              to="/login"
              class="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              Login
            </router-link>
          </div>
        </div>

        <!-- Right -->
        <div class="hidden md:block">
          <img
            src="https://illustrations.popsy.co/gray/web-security.svg"
            alt="RBAC Illustration"
            class="w-full"
          />
        </div>

      </div>
    </section>

    <!-- Features -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h3 class="text-3xl font-bold text-gray-800">Features</h3>
        <p class="mt-2 text-gray-600">
          Everything you need to manage roles and permissions
        </p>

        <div class="mt-10 grid md:grid-cols-3 gap-8">

          <div class="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md">
            <h4 class="text-lg font-semibold text-gray-800">
              Role Management
            </h4>
            <p class="mt-2 text-gray-600">
              Assign roles like admin, editor, and user with ease.
            </p>
          </div>

          <div class="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md">
            <h4 class="text-lg font-semibold text-gray-800">
              Permission Control
            </h4>
            <p class="mt-2 text-gray-600">
              Fine-grained access control for every feature.
            </p>
          </div>

          <div class="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md">
            <h4 class="text-lg font-semibold text-gray-800">
              Secure Routing
            </h4>
            <p class="mt-2 text-gray-600">
              Protect routes dynamically based on user roles.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-blue-500 text-white py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h3 class="text-3xl font-bold">
          Ready to build secure apps?
        </h3>

        <p class="mt-3 text-blue-100">
          Start implementing RBAC in your Vue 3 project today.
        </p>

        <router-link
          to="/register"
          class="inline-block mt-6 bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Create Account
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-6 text-center">
      <p>© 2026 RBAC App. All rights reserved.</p>
    </footer>

  </div>
</template>

<script setup lang="ts">
// No logic needed for static landing page
</script>