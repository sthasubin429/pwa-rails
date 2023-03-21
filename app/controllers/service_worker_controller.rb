class ServiceWorkerController < ApplicationController
  protect_from_forgery except: :service_worker

  # service worker
  def service_worker; end

  # manifest
  def manifest; end

end
