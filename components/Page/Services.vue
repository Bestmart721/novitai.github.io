<template>
  <PageWrapper class="flex flex-col justify-center items-center">
    <PageHeader>
      <PageTitle class="uppercase" :text="$t('pages.services.title')" />
    </PageHeader>
    <PageBody >
      <div class="mt-10">
      <dl class="flex justify-center " >
        <CardService  
        :image="$t('pages.services.service-1.image')" 
        :title="$t('pages.services.service-1.title')" 
        :description="$t('pages.services.service-1.description')" />
        <CardService 
        :image="$t('pages.services.service-2.image')" 
        :title="$t('pages.services.service-2.title')" 
        :description="$t('pages.services.service-2.description')" />
      
        <CardService 
        :image="$t('pages.services.service-3.image')" 
        :title="$t('pages.services.service-3.title')" 
        :description="$t('pages.services.service-3.description')" />
        <CardService 
        :image="$t('pages.services.service-4.image')" 
        :title="$t('pages.services.service-4.title')" 
        :description="$t('pages.services.service-4.description')" />
      </dl>
      </div>
    </PageBody>
  </PageWrapper>
</template>
