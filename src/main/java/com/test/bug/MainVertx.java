/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.test.bug;

import io.vertx.core.Vertx;

/**
 *
 */
public class MainVertx {

    public static void main(String[] args) {
    	Vertx vertx = Vertx.vertx();
        vertx.deployVerticle(new ServerVerticle());
    }
}
