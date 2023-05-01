<?php

namespace Drupal\custom_twig;

use Drupal;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

use Drupal\node\Entity\Node;

/**
 * Custom twig functions.
 */
class CustomTwig extends AbstractExtension {

  public function getFunctions() {
    return [
      new TwigFunction('get_projects_locations', [$this, 'projectsLocations']),
      new TwigFunction('get_config_page_data', [$this, 'getConfigPageData']),
    ];
  }

  public function getConfigPageData () {
    $storage = Drupal::service('entity_type.manager')
      ->getStorage('config_pages')
      ->load('globale_einstellungen');
      $data = [
        "telefon" => "",
        "address" => "",
      ];
      
      if($storage) {
        $data["telefon"] = str_replace("&nbsp;", " ", $storage->get('field_telefon')->value);
        $data["address"] = str_replace("&nbsp;", " ", $storage->get('field_adresse')->value);
      }
    return $data;
  }

  public function projectsLocations() {

    $query = \Drupal::entityQuery('node');
    $nids = $query->condition('type', 'projekt')
      ->execute();

    $nids = array_values($nids);

    $results = Node::loadMultiple($nids);

    $arr = [];

    foreach ($results as $node){
      $lang = $node->field_breitengrad_projekt->value;
      $long = $node->field_langengrad_projekt->value;
      $title = $node->getTitle();
      $nid = $node->get("nid")->value;

      if($long != "" && $lang != "" ){
        $arr[] = [
          "nid" => $nid,
          "title" => $title,
          "lang" => $lang,
          "long" => $long,
        ];
      }
    }
    return $arr;
  }
}
